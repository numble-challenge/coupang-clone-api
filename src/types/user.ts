export type User = {
  id: number;
  email: string;
  password: string;

  name?: string;
  phoneNumber?: string;
  agreements?: {
    privacy: boolean;
    ad:
      | {
          email: boolean;
          sms: boolean;
          app: boolean;
        }
      | false;
  };
};
