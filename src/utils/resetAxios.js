/**
 * @method 重新统一axios的传参方式
 */
export default function(axios) {
  const get = axios.get
  const post = axios.post
  const del = axios.delete
  const put = axios.put
  const head = axios.head
  const options = axios.options
  const patch = axios.patch

  axios.get = function(url, {
    params,
    config = {}
  }) {
    get.call(this, url, {
      params,
      ...config
    })
  }

  axios.post = function(url, {
    params,
    config = {}
  }) {
    post.call(this, url, params, config)
  }

  axios.delete = function(url, {
    params,
    config = {}
  }) {
    del.call(this, url, {
      data: params,
      ...config
    })
  }

  axios.head = function(url, {
    params,
    config = {}
  }) {
    head.call(this, url, {
      data: params,
      ...config
    })
  }

  axios.options = function(url, {
    params,
    config = {}
  }) {
    options.call(this, url, {
      data: params,
      ...config
    })
  }

  axios.put = function(url, {
    params,
    config = {}
  }) {
    put.call(this, url, params, config)
  }

  axios.patch = function(url, {
    params,
    config = {}
  }) {
    patch.call(this, url, params, config)
  }
}
