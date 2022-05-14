export interface IClientData {
  name: string;
  phone: string;
  gender: string;
  birth: string;
}

export interface IWaitListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate?: (patient: IClientData) => void;
  patient?: IClientData;
}

export interface IInputMaskProps {
  id: string;
  name: string;
  value: string;
  placeholder: string;
  className: string;
}
