# nginx 部署

```nginx
location ^~ /docs {
    index  index.html index.htm;
    root /dir/;

    # 使用 rewrite 实现 try_files $uri $uri.html
    if (!-e $request_filename) {
        rewrite ^/(.*)$ /$1.html last;
    }
    
    location = / {
      return 302 /zh-CN/;
    }
}
```