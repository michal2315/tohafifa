import type { UpdateTrackRequest, UserView } from '@hafifa/shared';

/**
 * The only place the site talks to the API. Every endpoint gets a typed function here, using the
 * request/response types from @hafifa/shared.
 *
 * In development, Docusaurus forwards /api to the API (see plugins/api-proxy.ts).
 * In production, nginx does (see deploy/nginx.conf.template).
 */
const API_BASE_URL = '/api';

export class ApiError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(API_BASE_URL + path, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...init.headers },
  });

  if (!response.ok) {
    const body = (await response.json().catch(() => ({}))) as { message?: string | string[] };
    const message = Array.isArray(body.message) ? body.message.join(', ') : body.message;
    throw new ApiError(response.status, message ?? response.statusText);
  }
  return (await response.json()) as T;
}

export const api = {
  getMe: () => request<UserView>('/users/me'),

  updateMyTrack: (body: UpdateTrackRequest) =>
    request<UserView>('/users/me/track', { method: 'PUT', body: JSON.stringify(body) }),
};
