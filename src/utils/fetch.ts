/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { IRequestInit, ObjectLiteral } from "@/types";

// eslint-disable-next-line import/no-unresolved
import { IResponse } from "@/hooks/types";
import { messageError } from "./AntdMessage";

export class HttpError extends Error {
  status: number;

  response: Response;

  statusText: string;

  constructor(response: Response) {
    const { status, statusText } = response;

    super(statusText || String(status));

    this.name = "HttpError";
    this.status = status;
    this.statusText = statusText;
    this.response = response;
  }
}

export const errorHandler = (error: HttpError) => {
  switch (error.status) {
    case 401: {
      messageError("401 - 서버 접근 권한 미보유."); // logout();
      break;
    }
    case 403: {
      messageError("403 - 서버 접근 권한 미보유.");
      break;
    }
    case 500: {
      messageError("500 - 서버 문제 발생.");
      break;
    }
    case 400: {
      messageError("400 - 잘못된 요청.");
      break;
    }
    default: {
      throw error;
    }
  }
};

export async function fetchRequest<Data>(path: string, { host, method, headers, ...rest }: IRequestInit = {}) {
  // const apiDomain = (host as string) ?? import.meta.env.VITE_BASE_API_URL ?? '';
  const apiDomain = process.env.apiEndpoint;
  const headersConfig: HeadersInit = {
    ...(headers && { ...headers }),
  };

  const response = await fetch(`${apiDomain}${path}`, { method, headers: headersConfig, ...rest });

  if (response.ok) {
    return response.json() as Data;
  }

  throw new HttpError(response);
}

export function sendJSON<Data>(path: string, params: ObjectLiteral = {}, { body, headers, ...rest }: IRequestInit = {}) {
  const config: IRequestInit = {
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
      ...(headers && { ...headers }),
    },
    ...rest,
  };

  return fetchRequest<Data>(path, config);
}

export function sendFormData<Data>(path: string, params: Record<string, number | boolean | string | Blob> = {}, { body, headers, ...rest }: IRequestInit = {}) {
  const formData = new FormData();

  for (const [key, value] of Object.entries(params)) formData.append(key, value as string);

  const config: IRequestInit = {
    body: formData,
    headers: {
      ...(headers && { ...headers }),
    },
    ...rest,
  };

  return fetchRequest<Data>(path, config);
}

const getAPIHeaders = () => {
  const headers = {
    "X-Origin": window.location.origin,
    "Accept-Language": "en-US,en;q=0.5",
  };

  return headers;
};

export const getAPI = async <Data>(path: string) => {
  try {
    const res = await fetchRequest<IResponse<Data>>(path, {
      method: "GET",
      headers: getAPIHeaders(),
    });

    return res as Data;
  } catch (error) {
    throw error as HttpError;
  }
};

// export const getAPI = async <Data>(path: string) => {
//   try {
//     const res = await fetchRequest<IResponse<Data>>(path, {
//       method: 'GET',
//       headers: getAPIHeaders(),
//     });

//     return res as Data;
//   } catch {
//     // throw errorHandler(error as HttpError);
//   }
// };
