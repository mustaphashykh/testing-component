import PropTypes from 'prop-types';

function NavigatorsList({ title, navigators }) {
    return (
        <div className='space-y-2.5'>
            <p>{title}</p>
            <ul className='space-y-2.5 text-[0.95rem]'>
                {
                    navigators.length > 0 && navigators.map((navigator, idx) => <li key={idx} className='text-highlighted-text'>{navigator}</li>)
                }
            </ul>
        </div>
    )
}

NavigatorsList.propTypes = {
    title: PropTypes.string,
    navigators: PropTypes.array
}

export default NavigatorsList