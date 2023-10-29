For details see this [article](https://htmlacademy.ru/blog/articles/bot-hosting)

# Steps to deploy the app
VPS hosting: [reg.ru](https://www.reg.ru)

## Add public SSH key to VPS
hosting --> VPS --> Settings --> SSH keys

## Install all necessary software
hosting --> VPS --> Select my server --> Open console

Check operation system: `cat /etc/os-release`
- for Ubuntu/Debian run `apt -y install nodejs npm screen`
- for CentOS run `yum -y install nodejs npm screen`

## Get host IP address
hosting --> VPS --> Home --> IP address

## Copy files to the remote VPS server
Connect VPS with SFTP using [FileZilla](https://filezilla-project.org)
- Host: `sftp://host_ip_address`
- User: `root`
- Password: see email `Создан сервер Amethyst Neon`
- Port: leave empty

Copy project files in the directory `./home/my_app_directory`

## Install app's dependencies
hosting --> VPS --> Select my server --> Open console
- run `cd ./home/my_app_directory`
- run `cd npm ci`

## Set up apache web server
### SSL sertifiates
Using Let’s Encrypt
https://letsencrypt.org/getting-started - old
https://certbot.eff.org/instructions?ws=apache&os=ubuntufocal

Certificate +  промежуточный сертификат + корневой сертификат
`/etc/ssl/fullchain.crt`
`/etc/letsencrypt/live/vbahelpers.ru/fullchain.pem`
```
  -----BEGIN CERTIFICATE-----
  ...xxx
  -----END CERTIFICATE-----
  -----BEGIN CERTIFICATE-----
  ...xxx
  -----END CERTIFICATE-----
  -----BEGIN CERTIFICATE-----
  ...xxx
  -----END CERTIFICATE-----
```

Private key
`/etc/ssl/private.key` - old
`/etc/letsencrypt/live/vbahelpers.ru/privkey.pem`
```
  -----BEGIN RSA PRIVATE KEY-----
  ...xxx
  -----END RSA PRIVATE KEY-----
```

`/etc/apache2/sites-available/000-default-le-ssl.conf` - ssl cert info

### Describe app's root folder for hosts
Folder `/etc/apache2/sites-available`

File `000-default.conf`

```
  <VirtualHost *:80>
    ...
    DocumentRoot /home/my_app_directory
    ...
  </VirtualHost>
```

File `default-ssl.conf`

```
<IfModule mod_ssl.c>
	<VirtualHost _default_:443>
    ...
    DocumentRoot /home/my_app_directory
    ...
    SSLEngine on
		SSLProtocol all -SSLv2
    ...
		SSLCertificateFile /etc/ssl/fullchain.crt
		SSLCertificateKeyFile /etc/ssl/private.key
    ...
	</VirtualHost>
</IfModule>
```

Folder `/etc/apache2`

File `apache2.conf`

```
  <Directory /home/my_app_directory/>
    AllowOverride All
    Require all granted
  </Directory>
```

## Add http --> https redirect & redirect 404 to index.html
Folder `/home/my_app_directory`

File `.htaccess`

```
  RewriteEngine On
  RewriteCond %{SERVER_PORT} !^443$
  RewriteRule .* https://%{SERVER_NAME}%{REQUEST_URI} [R=301,L]

  DirectoryIndex index.html
  ErrorDocument 404 /
```

## Run the app
hosting --> VPS --> Select my server --> Open console
- run `apachectl start`

## Restart the app
hosting --> VPS --> Select my server --> Open console
- run `apachectl restart`

## Stop the app
hosting --> VPS --> Select my server --> Open console
- run `apachectl stop`
