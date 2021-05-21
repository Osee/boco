
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import customerState from '../../atom/customerState';
import { guidId } from '../../helpers/guidId';
import LandingPageLayout from './Layout/landingPageLayout';

function LandingPage(props) {
    
    const [customer, setCustomer] = useRecoilState(customerState)
<<<<<<< HEAD
    const {currentCustomer} = customer
=======
>>>>>>> 8c50ed31f91f55f0ed28dcd4e8470f0653863859
    const handleAnonymous = () => {
        const _date = new Date()
        const data = {}
        data["id"] = guidId("boco")
        data["username"] = "anonymous"
        data["login"] = _date.getTime()
        setCustomer(s => ({
            ...s,
            currentCustomer : data
        }))
    }

    useEffect(() => {
<<<<<<< HEAD
        if (currentCustomer !== null) {
            alert('Osée Botendju')
        }
    }, [currentCustomer])
=======
        if (customer.currentCustomer !== null) {
            alert('Osée Botendju')
        }
    }, [])
>>>>>>> 8c50ed31f91f55f0ed28dcd4e8470f0653863859

    return (
        <LandingPageLayout handleAnonymous={handleAnonymous}/>
    );
}

export default LandingPage;