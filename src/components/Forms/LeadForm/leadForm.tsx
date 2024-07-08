'use client';

import { useAtom } from 'jotai';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { modalSpecialAtom } from '@/atoms';
import stylesBtn from '../../Button/Button.module.scss';
import SuccessModal from '../../SuccessModal/successModal';
import TextField from '../TextField/textField';
import styles from './leadForm.module.scss';

interface IContacts {
  oid: string;
  retURL: string;
  lead_source: string;
  debug?: number;
  debugEmail?: string;
  '00N5h00000HZmHD'?: string;
  '00N5h00000HZm7L'?: string;
  '00N5h00000HZm7p'?: string;
  '00N5h00000Hb6Vg'?: string;
  last_name: string;
  company: string;
  phone: string;
  email: string;
}
interface IValidate {
  phone: boolean;
  email: boolean;
}

type Unknown = Record<string, string>;

const initContacts: IContacts = {
  oid: '00D5h000008rsSd',
  retURL: 'ganote.kr',
  lead_source: 'WebToLead',
  '00N5h00000HZmHD': '',
  '00N5h00000HZm7L': '',
  '00N5h00000HZm7p': '',
  '00N5h00000Hb6Vg': '',
  last_name: '',
  company: '',
  phone: '',
  email: '',
};

const initValidate: IValidate = {
  phone: true,
  email: true,
};

const emailRegex = /\S+@\S+\.\S+/;
const phoneRegex = /^\d{11}$/;
const handlePostRequest = async (data: IContacts): Promise<Unknown | undefined> => {
  const formData = new URLSearchParams();

  for (const key of Object.keys(data)) {
    formData.append(key, data?.[key as keyof IContacts] as string);
  }

  try {
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

const LeadForm = () => {
  const [contacts, setContacts] = useState<IContacts>(initContacts);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [validate, setValidate] = useState<IValidate>(initValidate);
  const [virtualPhone, setVirtualPhone] = useState<string>('');
  const [openSpecial, setOpenSpecial] = useAtom(modalSpecialAtom);

  const formatPhoneNumber = (phoneNumber: string) => {
    const phoneLength = phoneNumber?.length;

    if (phoneLength < 3) {
      setVirtualPhone(`${phoneNumber}`);
    }
    if (phoneLength >= 3 && phoneLength < 7) {
      setVirtualPhone(`${phoneNumber?.slice(0, 3)}-${phoneNumber?.slice(3)}`);
    }
    if (phoneLength >= 7) {
      setVirtualPhone(`${phoneNumber?.slice(0, 3)}-${phoneNumber?.slice(3, 7)}-${phoneNumber?.slice(7)}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setContacts(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    /*Down pdf*/
    if (openSpecial) {
      const link = document.createElement('a');

      // Set the download attribute with the desired filename
      link.download = '총무노트_소개서.pdf';

      // Set the href attribute to the path of your PDF file
      link.href = 'https://internal.ganote.kr/landing_page/download';

      // Append the link to the document body
      document.body.appendChild(link);

      // Trigger a click event on the link to start the download
      link.click();

      // Remove the link from the document body after the download is initiated
      document.body.removeChild(link);
      /*Down pdf*/
    }
    setValidate(prevState => {
      return {
        ...prevState,
        email: emailRegex.test(contacts?.email),
        phone: phoneRegex.test(contacts?.phone),
      };
    });
    if (emailRegex.test(contacts?.email) && phoneRegex.test(contacts?.phone)) {
      await handlePostRequest(Object.fromEntries(formData) as unknown as IContacts);
      setSuccess(true);
      setOpenSpecial(false);
    }
  };

  useEffect(() => {
    setCanSubmit(() => {
      const contactsTemp = contacts;
      delete contactsTemp?.['00N5h00000HZm7L'];
      delete contactsTemp?.['00N5h00000HZm7p'];
      openSpecial && delete contactsTemp?.['00N5h00000Hb6Vg'];
      return Object.keys(contacts)?.every(key => contacts[key as keyof IContacts] !== '');
    });
    formatPhoneNumber(contacts?.phone);
  }, [contacts]);

  return (
    <>
      {success ? (
        <SuccessModal />
      ) : (
        <form
          className={styles?.leadForm}
          onSubmit={
            canSubmit
              ? handleSubmit
              : event => {
                  event.preventDefault();
                }
          }
        >
          <div className={styles?.formBody}>
            <p className={styles?.formTitle}>
              사무실 관련 업무 고민될 땐 <br />
              총무노트에 연락 주세요
            </p>
            <input type="hidden" name="oid" value="00D5h000008rsSd" />
            <input type="hidden" name="retURL" value="ganote.kr" />
            <input type="hidden" id="lead_source" name="lead_source" value="WebToLead" />
            {/* <input type="hidden" name="debug" value={1} />
            <input type="hidden" name="debugEmail" value="adeline@newbrick.io" /> */}
            <TextField
              labelContent="이름"
              labelIconUrl="icons/user-icon.svg"
              labelIconAlt="user"
              name="last_name"
              id="last_name"
              placeholder="이름"
              value={contacts?.last_name}
              maxlength={80}
              onChange={handleChange}
            />
            <TextField
              labelContent="회사명"
              labelIconUrl="icons/city-icon.svg"
              labelIconAlt="City"
              name="company"
              id="company"
              placeholder="회사명"
              value={contacts?.company}
              maxlength={40}
              onChange={handleChange}
            />
            <TextField
              labelContent="연락처"
              labelIconUrl="icons/phone-icon.svg"
              labelIconAlt="Phone number"
              name="phone"
              id="phone"
              placeholder="010-0000-0000"
              value={contacts?.phone}
              onChange={handleChange}
              validation={validate?.phone}
              errorText="올바른 휴대전화 번호를 입력해주세요."
              virtualInput={virtualPhone}
              maxlength={40}
            />
            <TextField
              labelContent="이메일"
              labelIconUrl="icons/email-icon.svg"
              labelIconAlt="Email"
              name="email"
              id="email"
              type="mail"
              placeholder="이메일"
              value={contacts?.email}
              maxlength={80}
              onChange={handleChange}
              validation={validate?.email}
              errorText="올바른 휴대전화 번호를 입력해주세요."
            />
            <TextField
              className={styles?.visible}
              labelContent="지역"
              labelIconUrl="icons/location-icon.svg"
              labelIconAlt="Location"
              id="00N5h00000HZm7L"
              name="00N5h00000HZm7L"
              placeholder="지역"
              value={contacts?.['00N5h00000HZm7L'] ?? ''}
              maxlength={255}
              onChange={handleChange}
            />
            <TextField
              className={styles?.visible}
              labelContent="평수"
              labelIconUrl="icons/centimeter-icon.svg"
              labelIconAlt="Centimeter"
              name="00N5h00000HZm7p"
              id="00N5h00000HZm7p"
              type="number"
              min={0}
              placeholder="평수"
              value={contacts?.['00N5h00000HZm7p'] ?? ''}
              onChange={handleChange}
            />
            {!openSpecial && (
              <>
                <p className={styles?.specialLabel}>상담 희망 서비스</p>
                <div className={styles?.radioField}>
                  <input onChange={handleChange} type="radio" id="인테리어" name="00N5h00000Hb6Vg" value="인테리어" />{' '}
                  <label htmlFor="인테리어">인테리어</label>
                  <input
                    onChange={handleChange}
                    type="radio"
                    id="사무실 운영"
                    name="00N5h00000Hb6Vg"
                    value="사무실 운영"
                    style={{ marginLeft: '24px' }}
                  />{' '}
                  <label htmlFor="사무실 운영">사무실 운영</label>
                </div>
              </>
            )}
            <div className={styles?.acceptInput}>
              <input onChange={handleChange} type="checkbox" id="policy_accept" name="00N5h00000HZmHD" value="yes" />
              <label htmlFor="policy_accept">상담 신청을 위한 필수 개인정보 수집 및 활용에 동의합니다</label>
            </div>
          </div>

          <div className={styles?.formFooter}>
            <button
              type="submit"
              className={`${stylesBtn?.Button} ${canSubmit ? stylesBtn?.ButtonOrange : stylesBtn?.ButtonGrey}`}
            >
              {openSpecial ? '소개 다운받기' : '상담 신청하기'}
              <Image src="/icons/sent-icon.svg" width={20} height={20} alt="Sent" />
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default LeadForm;
