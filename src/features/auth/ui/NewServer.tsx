import { Controller, useForm } from 'react-hook-form';
import styles from './NewServer.module.scss';
import { NewServerDto } from '../types/server';
import { Input } from '@components/Input';
import { Select } from '@components/Select';
import { ProtocolEnum } from '../enums/protocol.enum';
import { Button } from '@components/Button';
import { AuthLogo } from '@assets/index';

const NewServer = function() {
    const { control, handleSubmit, formState: {isValid} } = useForm<NewServerDto>({
        defaultValues: {
            address: '',
            path: '',
            port: '',
            protocol: null
        }
    });

    const submitServer = async() => {
        console.log('Submitting server...');
    }
    console.log(isValid);
    return(
        <div className={styles.container}>
            <form>
                <img src={AuthLogo} alt="logo" className={styles.logo}/>
                <div className={styles.input_holder}>
                    <Controller 
                        control={control} 
                        name='address' 
                        rules={{required: true}}
                        render={({ field: {name, onChange, value} }) => (
                            <Input name={name} onChange={onChange} value={value} placeholder='Адрес' projectType='auth_input'/>
                        )}/>
                </div>
                <div className={styles.input_holder}>
                    <Controller 
                        control={control} 
                        name='port' 
                        rules={{required: true}}
                        render={({ field: {name, onChange, value}}) => (
                            <Input name={name} onChange={onChange} value={value} placeholder='Порт' projectType='auth_input'/>
                        )}/>
                </div>
                <div className={styles.input_holder}>
                    <Controller 
                        control={control} 
                        name='path'
                        rules={{required: true}}
                        render={({ field: {name, onChange, value}}) => (
                            <Input name={name} onChange={onChange} value={value} placeholder='Путь' projectType='auth_input'/>
                        )}/>
                </div>
                <div className={styles.input_holder}>
                    <Controller 
                        control={control} 
                        name='protocol' 
                        rules={{required: true}}
                        render={({ field: {name, onChange, value}}) => (
                            <Select 
                                options={[{label: ProtocolEnum.HTTP, value: ProtocolEnum.HTTP}, {label: ProtocolEnum.HTTPS, value: ProtocolEnum.HTTPS}]}
                                defaultValueLabel='Протокол'
                                dropDirection='bottom'
                                projectType='auth_protocol'
                                name={name}
                                onChange={onChange}
                                value={value}/>
                        )}/>
                </div>
                <div className={styles.button_holder}>
                    <Button 
                        projectType={['primary']} 
                        onClick={handleSubmit(submitServer)}
                        disabled={!isValid}>
                            Выбрать
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default NewServer;