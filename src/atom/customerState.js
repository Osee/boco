import { atom } from 'recoil'

const customerState = atom({
    default: {
        currentCustomer : null
    },
    key :'customerState-atom'
})

export default customerState