import { FocusEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import Loading from 'src/components/Loading/Loading';

import { PatientService } from '~services/api/patient';
import { birthDateRegex, phoneRegex } from '~utils/validation';

import { IClientData, IInputMaskProps, IWaitListModalProps } from './types';

import Button from '~components/Button/Button';
import Modal from '~components/Modal/Modal';

import scss from './WaitListModal.module.scss';

function WaitListModal(props: IWaitListModalProps) {
  const [age, setAge] = useState('00');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { watch, register, reset, handleSubmit, setValue, errors, setError } =
    useForm<IClientData>();

  const handleAgeValue = (birth: string) => {
    const currentYear = new Date().getFullYear();
    const birthYear = parseInt(birth.split('/').pop()!, 10);

    if (birthYear < currentYear) {
      setAge(`${currentYear - birthYear}`);
    } else {
      setError('birth', { type: 'manual', message: 'Insira uma data válida' });
    }
  };

  const onModalClose = () => {
    setIsOpen(false);
    props.onClose();
    reset();
  };

  const onPhoneBlur = (e: FocusEvent<HTMLInputElement>) => {
    let phone = e.target.value.replace(/\D/g, '');
    if (phone.length > 0) {
      if (phone.length === 10) {
        const value = phone.match(/(\d{2})(\d{4})(\d{4})/);
        phone = `(${value![1]}) ${value![2]}-${value![3]}`;
        setValue('phone', phone);
      } else if (phone.length >= 11) {
        const value = phone.match(/(\d{2})(\d{5})(\d{4})/);
        phone = `(${value![1]}) ${value![2]}-${value![3]}`;
        setValue('phone', phone);
      } else {
        setError('phone', { type: 'manual', message: 'Insira um telefone válido' });
      }
    } else {
      setError('phone', { type: 'manual', message: 'Insira um telefone válido' });
    }
  };

  const onBirthBlur = (e: FocusEvent<HTMLInputElement>) => {
    let birth = e.target.value.replace(/\D/g, '');
    if (birth.length > 0) {
      if (birth.length >= 8) {
        const value = birth.match(/(\d{2})(\d{2})(\d{4})/);
        birth = `${value![1]}/${value![2]}/${value![3]}`;
        setValue('birth', birth);

        handleAgeValue(birth);
      } else {
        setError('birth', { type: 'manual', message: 'Insira uma data válida' });
      }
    } else {
      setError('birth', { type: 'manual', message: 'Insira uma data válida' });
    }
  };

  const onSubmit = async (data: IClientData) => {
    setIsLoading(true);
    if (props.patient && props.onUpdate) {
      props.onUpdate(data);

      await PatientService.update(props.patient.id, data);
      await PatientService.publish(props.patient.id);
    } else {
      const res = await PatientService.create(data);
      await PatientService.publish(res.id);
    }
    setIsLoading(false);
    onModalClose();
  };

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  useEffect(() => {
    if (props.patient) {
      const year = props.patient.birth.split('/').pop();
      const today = new Date();

      setAge(`${today.getFullYear() - parseInt(year!, 10)}`);
    }
  }, [props.patient]);

  return (
    <Modal isOpen={isOpen} onClose={onModalClose} className={scss.container}>
      <Loading loading={isLoading}>
        <div className={scss.content}>
          <div className={scss.titleWrapper}>
            <h3 className={scss.title}>Informações do paciente</h3>
          </div>
          <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={scss.inputContainer}>
              <span className={scss.inputName}>Nome</span>
              <input
                ref={register({
                  required: true,
                })}
                id="name"
                defaultValue={props.patient ? props.patient.name : ''}
                name="name"
                type="text"
                className={[scss.input, scss.name].join(' ')}
                placeholder="Nome completo do paciente"
              />
            </div>
            <div className={scss.inputContainer}>
              <span className={scss.inputName}>Telefone</span>
              <div className={scss.inputWrapper}>
                <input
                  ref={register({
                    required: true,
                    pattern: {
                      value: phoneRegex,
                      message: 'Insira uma telefone válida',
                    },
                  })}
                  id="phone"
                  defaultValue={props.patient ? props.patient.phone : ''}
                  name="phone"
                  type="text"
                  className={scss.input}
                  placeholder="(00) 00000-0000"
                  onBlur={onPhoneBlur}
                />
                {errors.phone ? <span className={scss.error}>{errors.phone?.message}</span> : <></>}
              </div>
            </div>
            <div className={scss.inputContainer}>
              <span className={scss.inputName}>Sexo</span>
              <select
                ref={register({
                  required: true,
                })}
                id="gender"
                defaultValue={props.patient ? props.patient.gender : ''}
                name="gender"
                className={scss.input}
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div className={scss.inputContainer}>
              <span className={scss.inputName}>Nascimento</span>
              <div className={scss.inputWrapper}>
                <input
                  ref={register({
                    required: true,
                    pattern: {
                      value: birthDateRegex,
                      message: 'Insira uma data válida',
                    },
                  })}
                  id="birth"
                  defaultValue={props.patient ? props.patient.birth : ''}
                  name="birth"
                  type="text"
                  className={scss.input}
                  placeholder="00/00/0000"
                  onBlur={onBirthBlur}
                />
                {errors.birth ? <span className={scss.error}>{errors.birth?.message}</span> : <></>}
              </div>
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
