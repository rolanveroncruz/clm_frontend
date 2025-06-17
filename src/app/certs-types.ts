interface pkixName{
  commonName: string;
  organization: string;
  organizationalUnit:string;
  country: string;
  locality: string;
  province: string;
}

type Certificate = {
  serialNumber :string;
  subject: pkixName;
  issuer: pkixName;
  notBefore: Date;
  notAfter: Date;
  signatureAlgorithm: string;
  publicKeyAlgorithm: string;
  publicKeySize: number;
}

type  GetCertsResponse = {
  certs: Certificate[];
  status: string;
}

