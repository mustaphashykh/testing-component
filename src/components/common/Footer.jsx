import PropTypes from 'prop-types';

function Footer({ icons }) {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className="text-lg text-highlighted-text w-full flex items-center justify-between py-10">
            <p className="font-medium drop-shadow">&copy; {year} IQTEST.AI</p>
            <div className='flex items-center gap-4'>
                {
                    icons.length > 0 && icons.map((icon, idx) => <div key={idx} className='w-10 h-10 rounded-full text-white bg-main-purple flex items-center justify-center text-base'><i className={icon} /></div>)
                }
            </div>
        </div>
    )
}
Footer.propTypes = {
    icons: PropTypes.array
}

export default Footer