'use client';

import { Button, Checkbox, Form, Input, Modal, Radio } from 'antd';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { memo, useState } from 'react';

import { leadFormModalAtom } from '@/atoms';
import withTheme from '@/theme';
import { IContacts, Unknown } from '@/types/leadFormType';



declare global {
  interface Window {
    dataLayer: any[];
  }
}

const handlePostRequest = async (data: IContacts): Promise<Unknown | undefined> => {
  try {
    const params = {
      ...data,
      '00N5h00000HZmHD': !!data['00N5h00000HZmHD'] ? 'yes' : 'no',
    };

    const formData = new URLSearchParams();

    for (const key of Object.keys(params)) {
      formData.append(key, params?.[key as keyof IContacts] as string);
    }

    const response = await fetch(
      `https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D5h000008rsSd`,
      {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return (await response.json()) as Unknown;
  } catch (error) {
    console.error('Error making POST request:', error);
    return undefined;
  }
};

const LeadFormN = memo(() => {
  const [form] = Form.useForm();

  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const [leadFormModal, setLeadFormModal] = useAtom(leadFormModalAtom);

  const handleCancel = () => {
    setLeadFormModal(prev => ({ ...prev, open: false }));
    form.resetFields();
    setIsDisabled(true);
  };

  const handleCancelSuccessModal = () => {
    setOpenSuccessModal(false);
  };

  const onDownload = () => {
    const link = document.createElement('a');

    // Set the download attribute with the desired filename
    link.download = '총무노트_서비스소개서.pdf';

    // Set the href attribute to the path of your PDF file
    link.href = 'https://internal.ganote.kr/landing_page/download';

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click event on the link to start the download
    link.click();

    // Remove the link from the document body after the download is initiated
    document.body.removeChild(link);
    /*Down pdf*/
  };

  const onFinish = async (values: any) => {
    if (leadFormModal.isDownload) {
      onDownload();
    }
    try {
      setConfirmLoading(true);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submit',
      });

      // Replace the value of "debugEmail" by a personal email ==> send email on localhost
      const debugValues = {
        debug: 1,
        debugEmail: 'debugEmail',
      };

      const params = {
        oid: '00D5h000008rsSd',
        retURL: 'ganote.kr',
        lead_source: 'WebToLead',
        ...values,
        ...(process.env.NODE_ENV === 'development' && { ...debugValues }),
      };

      await handlePostRequest(params);
    } finally {
      setConfirmLoading(false);
      setOpenSuccessModal(true);
      handleCancel();
    }
  };

  const onValuesChange = (changedValues: Object, allValues: Object) => {
    // Custom values of fields: last_name & company
    const customFields = Object.fromEntries(
      Object.entries(allValues).map(([key, value]) => {
        if (key === 'last_name' || key === 'company') {
          value = value ? value.trim() : value;
        }
        return [key, value];
      })
    );

    const allFieldsFilled = Object.values(customFields).every(value => value !== undefined && value !== '');
    setIsDisabled(!allFieldsFilled);
  };

  const handleSuccessBtn = () => {
    if (leadFormModal.isDownload) {
      onDownload();
    }
    handleCancelSuccessModal();
  }

  return (
    <>
      {withTheme(
        <>
          <Modal
            className="g-modal"
            centered
            open={leadFormModal.open}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            footer={null}
            width={620}
            closeIcon={<Image width={18} height={18} src="/iconsN/Icon_close.svg" alt="close" />}
          >
            <div className="form_b-head">
              {leadFormModal.isDownload ? (
                <>
                  <h4>딱 5개 항목만 입력하고</h4>
                  <h4>간편하게 소개서 받으세요</h4>
                </>
              ) : (
                <>
                  <h4>무료 상담 한번으로</h4>
                  <h4>총무 업무가 쉬워집니다</h4>
                </>
              )}
            </div>
            <Form
              form={form}
              onFinish={onFinish}
              name="leadForm"
              layout="vertical"
              initialValues={{
                '00N5h00000Hb6Vg': '사무실 운영',
              }}
              onValuesChange={onValuesChange}
            >
              <div className="form_b-scroll">
                <Form.Item
                  label="성함"
                  name="last_name"
                  rules={[{ required: true, message: '성함 형식이 올바르지 않습니다.' }]}
                >
                  <Input placeholder="성함" />
                </Form.Item>
                <Form.Item
                  label="회사명"
                  name="company"
                  rules={[{ required: true, message: '회사명 형식이 올바르지 않습니다.' }]}
                >
                  <Input placeholder="회사명" />
                </Form.Item>
                <Form.Item
                  label="연락처"
                  name="phone"
                  rules={[
                    () => ({
                      validator(_rule, value) {
                        const phoneRegex = new RegExp(/^\d{11}$/);
                        if (phoneRegex.test(value) && !!value) {
                          return Promise.resolve();
                        }
                        return Promise.reject('올바른 휴대전화 번호를 입력해주세요');
                      },
                    }),
                  ]}
                >
                  <Input placeholder="010-0000-0000" />
                </Form.Item>
                <Form.Item
                  label="회사 이메일"
                  name="email"
                  rules={[{ required: true, type: 'email', message: '올바른 이메일 주소를 입력해주세요.' }]}
                >
                  <Input placeholder="24.7@24dot7company.com" />
                </Form.Item>

                <div className="form_b-bot">
                  <p>상담 희망 서비스</p>
                  <Form.Item name="00N5h00000Hb6Vg" className="g-radio" rules={[{ required: true, message: '' }]}>
                    <Radio.Group>
                      <Radio value={'사무실 운영'}>사무실 운영 관리</Radio>
                      <Radio value={'인테리어'}>인테리어</Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>
              </div>

              <Form.Item
                className="g-checkbox"
                name="00N5h00000HZmHD"
                valuePropName="checked"
                rules={[
                  {
                    required: true,
                    transform: value => value || undefined,
                    type: 'boolean',
                    message: '',
                  },
                ]}
              >
                <Checkbox>상담 신청을 위한 필수 개인정보 수집 및 활용에 동의합니다</Checkbox>
              </Form.Item>
              <Form.Item shouldUpdate className="form-submit">
                {() => (
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="g-cta-button"
                    icon={<Image width={12} height={10} src="/iconsN/ic-arrow-right.svg" alt="icon" />}
                    disabled={
                      isDisabled || // Check fields when values are changed
                      confirmLoading ||
                      !!form.getFieldsError().filter(({ errors }) => errors.length).length
                    }
                    loading={confirmLoading}
                  >
                    {leadFormModal.isDownload ? `소개서 다운받기` : `무료 상담 받기`}
                  </Button>
                )}
              </Form.Item>
            </Form>
          </Modal>

          <Modal
            className="g-modal g-success-modal"
            centered
            open={openSuccessModal}
            onCancel={handleCancelSuccessModal}
            footer={null}
            width={620}
            closeIcon={<Image width={18} height={18} src="/iconsN/Icon_close.svg" alt="close" />}
          >
            <div className="modal_b-head">
              {leadFormModal.isDownload ? (
                <>
                  <h3>소개서 다운로드가 시작됩니다</h3>
                  <p>다운로드가 시작되지 않으면 아래 문의로 연락 주세요</p>
                </>
              ) : (
                <>
                  <h3>상담이 접수되었습니다</h3>
                  <p>{`남겨주신 연락처로 \n담당자가 곧 연락드리겠습니다`}</p>
                </>
              )}
            </div>
            <div className="modal_b-body">
              <Image
                width={255}
                height={247}
                src={leadFormModal.isDownload ? '/imagesN/success-download-img.svg' : '/imagesN/success-img.svg'}
                alt="success"
              />
            </div>
            <div className="modal_b-foot">
              <Button
                type="primary"
                className="g-cta-button"
                onClick={() => handleSuccessBtn()}
              >
                {leadFormModal.isDownload ? '소개서 다운받기' : '확인'}
              </Button>
            </div>
          </Modal>
        </>
      )}
    </>
  );
});

export default LeadFormN;
