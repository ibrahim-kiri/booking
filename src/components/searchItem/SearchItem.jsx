import './searchItem.css';

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/359553412.webp?k=3397f2a26ce1f6be8db472359b6e4ac9ca939ed37995d0c72bc4feb809f9727d&o=&s=1" alt="" className='siImg' />
        <div className='siDesc'>
            <h1 className='siTitle'>Tower Street Apartments</h1>
            <span className='siDistance'>500m from center</span>
            <span className='siTaxiOp'>Free airport taxi</span>
            <span className='siSubtitle'>
                Studio Apartment with Air conditioning
            </span>
            <span className='siFeatures'>
                Entire studio . 1 bathroom . 21m 1 full bed
            </span>
            <span className='siCancelOp'>Free cancellation</span>
            <span className='siCancelOpSubtitle'>
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className='siDetails'>
            <div className='siRating'>
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className='siDetailTexts'>
                <span className='siPrice'>$123</span>
                <span className='siTaxOp'>Includes taxes and fees</span>
                <button className='siCheckButton'>See availabilty</button>
            </div>
        </div>
    </div>
  );
};

export default SearchItem;