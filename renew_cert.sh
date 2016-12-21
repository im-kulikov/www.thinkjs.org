cd ./ssl
mkdir -p ../www/challenges/
openssl genrsa 4096 > account.key
openssl req -new -newkey rsa:4096 -nodes -keyout ./account.key -out ./domain.csr -config ./openssl.cnf
python acme_tiny.py --account-key account.key --csr domain.csr --acme-dir ../www/challenges/ > signed.crt || exit
wget -O - https://letsencrypt.org/certs/lets-encrypt-x3-cross-signed.pem > intermediate.pem
cat signed.crt intermediate.pem > chained.pem
service nginx reload