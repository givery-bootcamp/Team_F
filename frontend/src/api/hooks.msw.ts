/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * Web開発研修6班 API
 * FY24卒Web開発研修6班のAPI仕様書です
 * OpenAPI spec version: 1.0.0
 */
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
import type {
  SchemaCommentResponse,
  SchemaMutationSchema,
  SchemaPostResponse,
  SchemaUserResponse
} from './model'

export const getListPostsResponseMock = (): SchemaPostResponse[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({body: faker.helpers.arrayElement([faker.word.sample(), undefined]), post_id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), title: faker.helpers.arrayElement([faker.word.sample(), undefined]), user_id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), user_name: faker.helpers.arrayElement([faker.word.sample(), undefined])})))

export const getCreatePostResponseMock = (): SchemaPostResponse[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({body: faker.helpers.arrayElement([faker.word.sample(), undefined]), post_id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), title: faker.helpers.arrayElement([faker.word.sample(), undefined]), user_id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), user_name: faker.helpers.arrayElement([faker.word.sample(), undefined])})))

export const getSignInResponseMock = (overrideResponse: Partial< SchemaUserResponse > = {}): SchemaUserResponse => ({user_id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), user_name: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse})

export const getGetCurrentUserResponseMock = (overrideResponse: Partial< SchemaUserResponse > = {}): SchemaUserResponse => ({user_id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), user_name: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse})

export const getGetPostResponseMock = (overrideResponse: Partial< SchemaPostResponse > = {}): SchemaPostResponse => ({body: faker.helpers.arrayElement([faker.word.sample(), undefined]), post_id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), title: faker.helpers.arrayElement([faker.word.sample(), undefined]), user_id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), user_name: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse})

export const getListPostCommentsResponseMock = (): SchemaCommentResponse[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({body: faker.helpers.arrayElement([faker.word.sample(), undefined]), created_at: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), post_id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), updated_at: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), user_id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), user_name: faker.helpers.arrayElement([faker.word.sample(), undefined])})))

export const getCreatePostCommentsResponseMock = (overrideResponse: Partial< SchemaMutationSchema > = {}): SchemaMutationSchema => ({message: faker.helpers.arrayElement([faker.word.sample(), undefined]), target_id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ...overrideResponse})

export const getDeletePostCommentsResponseMock = (overrideResponse: Partial< SchemaMutationSchema > = {}): SchemaMutationSchema => ({message: faker.helpers.arrayElement([faker.word.sample(), undefined]), target_id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ...overrideResponse})

export const getPutPostCommentsResponseMock = (overrideResponse: Partial< SchemaMutationSchema > = {}): SchemaMutationSchema => ({message: faker.helpers.arrayElement([faker.word.sample(), undefined]), target_id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ...overrideResponse})

export const getDeletePostResponseMock = (overrideResponse: Partial< SchemaMutationSchema > = {}): SchemaMutationSchema => ({message: faker.helpers.arrayElement([faker.word.sample(), undefined]), target_id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ...overrideResponse})

export const getUpdatePostResponseMock = (overrideResponse: Partial< SchemaMutationSchema > = {}): SchemaMutationSchema => ({message: faker.helpers.arrayElement([faker.word.sample(), undefined]), target_id: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), ...overrideResponse})


export const getHealthCheckMockHandler = () => {
  return http.get('*/', async () => {await delay(1000);
    return new HttpResponse(null,
      {
        status: 204,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getListPostsMockHandler = (overrideResponse?: SchemaPostResponse[] | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<SchemaPostResponse[]> | SchemaPostResponse[])) => {
  return http.get('*/posts', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getListPostsResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getCreatePostMockHandler = (overrideResponse?: SchemaPostResponse[] | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<SchemaPostResponse[]> | SchemaPostResponse[])) => {
  return http.post('*/posts', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getCreatePostResponseMock()),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getSignInMockHandler = (overrideResponse?: SchemaUserResponse | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<SchemaUserResponse> | SchemaUserResponse)) => {
  return http.post('*/signin', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getSignInResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getSignOutMockHandler = () => {
  return http.post('*/signout', async () => {await delay(1000);
    return new HttpResponse(null,
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getGetCurrentUserMockHandler = (overrideResponse?: SchemaUserResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<SchemaUserResponse> | SchemaUserResponse)) => {
  return http.get('*/user', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetCurrentUserResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getGetPostMockHandler = (overrideResponse?: SchemaPostResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<SchemaPostResponse> | SchemaPostResponse)) => {
  return http.get('*/posts/:id', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetPostResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getListPostCommentsMockHandler = (overrideResponse?: SchemaCommentResponse[] | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<SchemaCommentResponse[]> | SchemaCommentResponse[])) => {
  return http.get('*/posts/:postId/comments', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getListPostCommentsResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getCreatePostCommentsMockHandler = (overrideResponse?: SchemaMutationSchema | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<SchemaMutationSchema> | SchemaMutationSchema)) => {
  return http.post('*/posts/:postId/comments', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getCreatePostCommentsResponseMock()),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getDeletePostCommentsMockHandler = (overrideResponse?: SchemaMutationSchema | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<SchemaMutationSchema> | SchemaMutationSchema)) => {
  return http.delete('*/posts/:postId/comments/:commentId', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getDeletePostCommentsResponseMock()),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getPutPostCommentsMockHandler = (overrideResponse?: SchemaMutationSchema | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<SchemaMutationSchema> | SchemaMutationSchema)) => {
  return http.post('*/posts/:postId/comments/:commentId', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getPutPostCommentsResponseMock()),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getDeletePostMockHandler = (overrideResponse?: SchemaMutationSchema | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<SchemaMutationSchema> | SchemaMutationSchema)) => {
  return http.delete('*/posts/:postid', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getDeletePostResponseMock()),
      {
        status: 204,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getUpdatePostMockHandler = (overrideResponse?: SchemaMutationSchema | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<SchemaMutationSchema> | SchemaMutationSchema)) => {
  return http.put('*/posts/:postid', async (info) => {await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getUpdatePostResponseMock()),
      {
        status: 204,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}
export const getWeb6APIMock = () => [
  getHealthCheckMockHandler(),
  getListPostsMockHandler(),
  getCreatePostMockHandler(),
  getSignInMockHandler(),
  getSignOutMockHandler(),
  getGetCurrentUserMockHandler(),
  getGetPostMockHandler(),
  getListPostCommentsMockHandler(),
  getCreatePostCommentsMockHandler(),
  getDeletePostCommentsMockHandler(),
  getPutPostCommentsMockHandler(),
  getDeletePostMockHandler(),
  getUpdatePostMockHandler()
]
