import './featured.css';

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img
             src="https://q-xx.bstatic.com/xdata/images/city/250x250/682809.jpg?k=1c20a53161dc5de8745e872e3ec4ba9ac7db39d546f6ea0ee9052ab814d6bdb1&o="
             alt=""
             className='featuredImg'
            />
            <div className='featuredTitles'>
                <h1>Kampala</h1>
                <h2>532 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img
             src="https://r-xx.bstatic.com/xdata/images/city/250x250/782360.jpg?k=03db7bc11e26336680147fe3b1a44fbb065062fa054242fbd9ec12ebd4665d31&o="
             alt=""
             className='featuredImg'
            />
            <div className='featuredTitles'>
                <h1>Entabbe</h1>
                <h2>532 properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img
             src="https://r-xx.bstatic.com/xdata/images/city/250x250/921353.jpg?k=cfe03ca8183f0d20480cea15c81fa1eb90ea1ab8f62a497ce3337312fd007dd2&o="
             alt=""
             className='featuredImg'
            />
            <div className='featuredTitles'>
                <h1>Fort Portal</h1>
                <h2>532 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured