import { Button } from '@components/Button';
import styles from './Filter.module.scss';
import { GrayReloadIcon, SearchArrowLeft, SearchArrowRight, SearchRefreshIcon, WhitePlusRoundedIcon } from '@assets/index';
import { Input } from '@components/Input';
import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { GoodsViewState } from '..';
import { setSearch } from '../model/goodsSlice';
import Actions from './Actions';

function FilterContainer() {
    const dispatch = useAppDispatch();
    const { filter: { search } } = useAppSelector<GoodsViewState>(state => state.GoodsView);
    
    function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setSearch(e.target.value));
    }

    return(
        <div className={styles.filter_container}>
            <Button 
                onClick={() => {console.log('Blue button click')}}
                projectType={['goods_filter_blue']}>
                <img src={WhitePlusRoundedIcon} alt="icon" className={styles.button_icon}/>
                Добавить
            </Button>
            <Button 
                onClick={() => {console.log('Green button click')}}
                projectType={['goods_filter_green']}>
                <img src={WhitePlusRoundedIcon} alt="icon" className={styles.button_icon}/>
                Добавить группу
            </Button>
            <Actions />
            <Button 
                onClick={() => {console.log('Green button click')}}
                projectType={['goods_filter_transparent_main']}>
                <img src={GrayReloadIcon} alt="icon" className={styles.button_icon}/>
                Обновить
            </Button>
            <div className={styles.search_holder}>
                <Input 
                    projectType='goods-filter-search' 
                    placeholder='Поиск'
                    value={search}
                    onChange={handleSearchChange}/>
                <Button onClick={() => {}} projectType={["transparent"]}>
                    <SearchArrowLeft />
                </Button>
                <Button onClick={() => {}} projectType={["transparent"]}>
                    <SearchArrowRight />
                </Button>
                <Button onClick={() => {}} projectType={["transparent"]}>
                    <SearchRefreshIcon />
                </Button>
            </div>
        </div>
    );
};

export default FilterContainer;