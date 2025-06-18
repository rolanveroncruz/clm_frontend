export interface pkixName{
  commonName: string;
  organization: string|null;
  organizationalUnit:string|null;
  country: string|null;
  locality: string|null;
  province: string|null;
}

export interface Certificate {
  serialNumber :string;
  subject: pkixName;
  issuer: pkixName;
  notBefore: Date;
  notAfter: Date;
  signatureAlgorithm: string|null;
  publicKeyAlgorithm: string|null;
  publicKeySize: number;
  requestedServer: string;
}
export interface JSONCertificate {
  Pk: number
  SerialNumber: string
  SqlTimeStamp: string
  SubjectCommonName: string
  SubjectCountry: string|null;
  SubjectLocality: string|null;
  SubjectOrganisation: string|null;
  SubjectOrganisationalUnit: string|null;
  SubjectProvince: string|null;
  UserEmail: string;
  IssuerCommonName: string;
  IssuerCountry: string;
  IssuerOrganization: string;
  IssuerOrganizationalUnit: string;
  SignatureAlgorithm: string;
  PublicKeyAlgorithm: string;
  PublicKeySize: number;
  NotAfter: Date;
  NotBefore: Date;
  RequestedServer: string;
}

export function JSONCertificateToCertificate(cert: JSONCertificate){
  let to: Certificate = {
    serialNumber : cert.SerialNumber,
    subject: {
      commonName:stringFromNullString(cert.SubjectCommonName),
      organization: stringOrNullFromNullString(cert.SubjectOrganisation),
      organizationalUnit: stringOrNullFromNullString(cert.IssuerOrganizationalUnit),
      country: stringOrNullFromNullString(cert.SubjectCountry),
      locality: stringOrNullFromNullString(cert.SubjectLocality),
      province: stringOrNullFromNullString(cert.SubjectProvince)
    },
    issuer:{
      commonName: stringFromNullString(cert.IssuerCommonName),
      organization: stringOrNullFromNullString(cert.IssuerOrganization),
      organizationalUnit: stringOrNullFromNullString(cert.IssuerOrganizationalUnit),
      country:stringOrNullFromNullString(cert.IssuerCountry),
      locality:null,
      province:null,
    },
    signatureAlgorithm: stringFromNullString(cert.SignatureAlgorithm),
    publicKeyAlgorithm:stringFromNullString(cert.PublicKeyAlgorithm),
    publicKeySize:cert.PublicKeySize,
    notBefore:dateFromNullString(cert.NotBefore),
    notAfter:dateFromNullString(cert.NotAfter),
    requestedServer:stringFromNullString(cert.RequestedServer),
  }
  return to;
}
function stringFromNullString(obj:any):string{
  if (obj===null || typeof obj === 'undefined'){
    return "";
  }
  if (obj.Valid){
   return obj.String;
  }else{
    return "";
  }
}
function stringOrNullFromNullString(obj:any):string|null{
  if (obj === null || typeof obj === 'undefined'){
    return null;
  }
  if (obj.Valid){
    return obj.String;
  }else{
    return null;
  }
}
function dateFromNullString(obj:any):Date{
    return new Date(obj.String);
}
