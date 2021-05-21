
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import customerState from '../../atom/customerState';
import { guidId } from '../../helpers/guidId';
import LandingPageLayout from './Layout/landingPageLayout';

function LandingPage(props) {
    
    const [customer, setCustomer] = useRecoilState(customerState)
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
        if (customer.currentCustomer !== null) {
            alert('Osée Botendju')
        }
    }, [])

    return (
        <LandingPageLayout handleAnonymous={handleAnonymous}/>
    );
}

export default LandingPage;