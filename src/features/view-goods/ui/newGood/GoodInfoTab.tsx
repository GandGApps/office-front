import { useContext } from 'react';
import styles from '../../styles/GoodInfoTab.module.scss';
import { NewGoodContext } from '@features/view-goods/model/newGood.context';
import { Select } from '@components/Select';
import { Input } from '@components/Input';
import { Controller } from 'react-hook-form';

const GROUP_OPTIONS = [
    {label: 'Группа', value: 'Option 1' }, 
    {label: 'Группа', value: 'Option 2' }, 
    {label: 'Группа', value: 'Option 3' }, 
    {label: 'Группа', value: 'Option 4' }, 
    {label: 'Группа', value: 'Option 5' }, 
    {label: 'Группа', value: 'Option 6' }, 
    {label: 'Группа', value: 'Option 7' }, 
    {label: 'Группа', value: 'Option 8' }, 
    {label: 'Группа', value: 'Option 9' }, 
    {label: 'Группа', value: 'Option 10' }, 
    {label: 'Группа', value: 'Option 11' }, 
    {label: 'Группа', value: 'Option 12' }, 
    {label: 'Группа', value: 'Option 13' }, 
    {label: 'Группа', value: 'Option 14' }, 
    {label: 'Суппер-Группа', value: 'Option 15' }, 
    {label: 'Нихао', value: 'Option 16' }, 
]

function GoodInfoTab() {
    const { register, control } = useContext(NewGoodContext);
    if (!register || !control) {
        return null;
    }
    return(
        <div className={styles.container}>
            <div className={styles.good_container}>
                <h2 className={styles.title}>~Товар~</h2>
                <div className={styles.input_holder}>
                    <span>Название</span>
                    <Controller 
                        name="name" 
                        control={control} 
                        rules={{ required: true }}
                        render={({field: { name, onChange, onBlur, value, disabled, ref}, fieldState: { error, invalid }}) => 
                            <Input 
                                projectType="add-good" 
                                name={name} 
                                onChange={onChange} 
                                onBlur={onBlur} 
                                value={value} 
                                disabled={disabled} 
                                ref={ref}
                                error={Boolean(error)}/>
                    }/>
                </div>
                <div className={styles.input_holder}>
                    <span>Тип номенклатуры</span>
                    <div className={styles.select_holder}>
                        <Select defaultValueLabel='Тип номенклатуры' options={[{label: 'Option 1', value: 'Option 1' }, { label: 'Option 2', value: 'Option 2' }]}/>
                    </div>
                </div>
                <div className={styles.input_holder}>
                    <span>Бух. категория</span>
                    <div className={styles.select_holder}>
                        <Select options={[{label: 'Option 1', value: 'Option 1' }, { label: 'Option 2', value: 'Option 2' }]} />
                    </div>
                </div>
                <div className={styles.input_holder}>
                    <span>Родительск. группа</span>
                    <div className={styles.select_holder}>
                        <Controller 
                            name='parent_group'
                            control={control}
                            render={({field: { name, onChange, value }}) => 
                                <Select name={name} onChange={onChange} value={value} options={GROUP_OPTIONS}/>
                            }/>
                        
                    </div>
                </div>
                <div className={styles.input_holder}>
                    <span>(Ном. код) Артикул</span>
                    <Controller 
                        name="article" 
                        control={control} 
                        rules={{ required: true }}
                        render={({field: { name, onChange, onBlur, value, disabled, ref}, fieldState: { error, invalid }}) => 
                            <Input 
                                projectType="add-good" 
                                name={name} 
                                onChange={onChange} 
                                onBlur={onBlur} 
                                value={value} 
                                disabled={disabled} 
                                ref={ref}
                                error={Boolean(error)}/>
                    }/>
                </div>
                <div className={styles.input_holder}>
                    <span>Код на кассе</span>
                    <Controller 
                        name="code" 
                        control={control} 
                        rules={{ required: true }}
                        render={({field: { name, onChange, onBlur, value, disabled, ref}, fieldState: { error, invalid }}) => 
                            <Input 
                                projectType="add-good" 
                                name={name} 
                                onChange={onChange} 
                                onBlur={onBlur} 
                                value={value} 
                                disabled={disabled} 
                                ref={ref}
                                error={Boolean(error)}/>
                    }/>
                </div>
                <div className={styles.input_holder}>
                    <span>Единицы измерения</span>
                    <div className={styles.select_holder}>
                        <Select options={[{label: 'Option 1', value: 'Option 1' }, { label: 'Option 2', value: 'Option 2' }]}/>
                    </div>
                </div>
                <div className={styles.input_holder}>
                    <span>Процент потерь</span>
                    <Controller 
                        name="left" 
                        control={control} 
                        rules={{ required: true }}
                        render={({field: { name, onChange, onBlur, value, disabled, ref}, fieldState: { error, invalid }}) => 
                            <Input 
                                projectType="add-good" 
                                name={name} 
                                onChange={onChange} 
                                onBlur={onBlur} 
                                value={value} 
                                disabled={disabled} 
                                ref={ref}
                                error={Boolean(error)}/>
                    }/>
                </div>
                <div className={styles.input_holder}>
                    <span>Наличие на</span>
                    <div className={styles.select_holder}>
                        <Select options={[{label: 'Option 1', value: 'Option 1' }, { label: 'Option 2', value: 'Option 2' }]}/>
                    </div>
                </div>
                <div className={styles.input_holder}>
                    <span>Стоимость+стоим. обраб.</span>
                    <Controller 
                        name="price" 
                        control={control} 
                        rules={{ required: true }}
                        render={({field: { name, onChange, onBlur, value, disabled, ref}, fieldState: { error, invalid }}) => 
                            <Input 
                                projectType="add-good" 
                                name={name} 
                                onChange={onChange} 
                                onBlur={onBlur} 
                                value={value} 
                                disabled={disabled} 
                                ref={ref}
                                error={Boolean(error)}/>
                    }/>
                </div>
            </div>
            <div className={styles.price}>
                <h2 className={styles.title}>~Прейскурант~</h2>
                <div className={styles.price_input_holder}>
                    <p>Цена в прайс листе ресторана</p>
                    <div style={{maxWidth: 100}}>
                        <Controller     
                            control={control}
                            name='price'
                            render={({field: {name, onChange, value}}) => (
                                <Input name={name} onChange={onChange} value={value}/>
                            )}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoodInfoTab;