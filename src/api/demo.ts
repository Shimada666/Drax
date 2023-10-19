import request from '@/config/axios'

class _Demo {
  test(): Ajax.PromiseAxiosResponse<any> {
    return request.get({
      url: 'https://jsonplaceholder.typicode.com/todos/1',
    })
  }
}

export const DemoApi = new _Demo()
