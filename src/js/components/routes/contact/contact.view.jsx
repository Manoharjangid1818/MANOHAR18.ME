import React from 'react';

// contact route component
export const ContactView = () => {
    return (
        <div className='ui-contact'>
            {/* email */}
            <a href='mailto:manoharjangid1818@gmail.com' className='ui-contact__section'>
                <div className='ui-contact__section__title'>Email</div>
                <div className='ui-contact__section__value'>manoharjangid1818@gmail.com</div>
            </a>

            {/* phone */}
            <a href='tel:+916353843900' className='ui-contact__section'>
                <div className='ui-contact__section__title'>Phone</div>
                <div className='ui-contact__section__value'>+91-6353843900</div>
            </a>

            {/* github */}
            <a href='https://github.com/Manoharjangid1818' target='_blank' className='ui-contact__section'>
                <div className='ui-contact__section__title'>GitHub</div>
                <div className='ui-contact__section__value'>@Manoharjangid1818</div>
            </a>

            {/* hashnode */}
            <a href='https://hashnode.com/@StaticVar18' target='_blank' className='ui-contact__section'>
                <div className='ui-contact__section__title'>Hashnode</div>
                <div className='ui-contact__section__value'>@StaticVar18</div>
            </a>

            {/* linkedin */}
            <a href='https://www.linkedin.com/in/manoharjangid1818' target='_blank' className='ui-contact__section'>
                <div className='ui-contact__section__title'>LinkedIn</div>
                <div className='ui-contact__section__value'>Manohar Jangid</div>
            </a>

        </div>
    );
};

// default props
ContactView.defaultProps = {};

// set display name
ContactView.displayName = 'ContactView';
