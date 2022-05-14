import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import Loading from 'src/components/Loading/Loading';

import { PatientService } from '~services/api/patient';

import { IClientData, IInputMaskProps, IWaitListModalProps } from './types';

import Button from '~components/Button/Button';
import Modal from '~components/Modal/Modal';

import scss from './WaitListModal.module.scss';

function WaitListModal(props: IWaitListModalProps) {
  const [age, setAge] = useState('00');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { watch, register, reset, handleSubmit } = useForm<IClientData>();

  const onModalClose = () => {
    setIsOpen(false);
    props.onClose();
    reset();
  };

  const onSubmit = async (data: IClientData) => {
    setIsLoading(true);
    const res = await PatientService.create(data);
    await PatientService.publish(res.id);
    setIsLoading(false);
    onModalClose();
  };

  const handleAgeValue = () => {
    const birth = watch('birth');
    if (birth.length === 10) {
      const year = birth.split('/').pop();
      const today = new Date();

      setAge(`${today.getFullYear() - parseInt(year!, 10)}`);
    }
  };

  const renderInputField = (inputProps: IInputMaskProps) => (
    <input ref={register({ required: true })} type="tel" {...inputProps} />
  );

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onModalClose} className={scss.container}>
      <Loading loading={isLoading}>
        <div className={scss.content}>
          <div className={scss.titleWrapper}>
            <h3 className={scss.title}>Informações do paciente</h3>
          </div>
          <form className={scss.inputContainer} onSubmit={handleSubmit(onSubmit)}>
            <div className={scss.inputWrapper}>
              <span className={scss.inputName}>Nome</span>
              <input
                ref={register({
                  required: true,
                })}
                id="name"
                name="name"
                type="text"
                className={[scss.input, scss.name].join(' ')}
                placeholder="Nome completo do paciente"
              />
            </div>
            <div className={scss.inputWrapper}>
              <span className={scss.inputName}>Telefone</span>
              <InputMask
                id="phone"
                name="phone"
                mask="(99) 99999-9999"
                placeholder="(00) 00000-0000"
                className={scss.input}
              >
                {(inputProps: IInputMaskProps) => renderInputField(inputProps)}
              </InputMask>
            </div>
            <div className={scss.inputWrapper}>
              <span className={scss.inputName}>Sexo</span>
              <input
                ref={register({
                  required: true,
                })}
                id="gender"
                name="gender"
                type="text"
                className={scss.input}
              />
            </div>
            <div className={scss.inputWrapper}>
              <span className={scss.inputName}>Nascimento</span>
              <InputMask
                id="birth"
                name="birth"
                mask="99/99/9999"
                placeholder="00/00/0000"
                className={scss.input}
                onBlur={handleAgeValue}
              >
                {(inputProps: IInputMaskProps) => renderInputField(inputProps)}
              </InputMask>
              <input
                type="text"
                value={age}
                readOnly
                className={[scss.input, scss.age].join(' ')}
                placeholder="00"
              />
              <span className={scss.ageText}>anos</span>
            </div>
            <div className={scss.btnWrapper}>
              <Button type="submit" className={scss.btn}>
                Salvar
              </Button>
            </div>
          </form>
        </div>
      </Loading>
    </Modal>
  );
}

export default WaitListModal;
