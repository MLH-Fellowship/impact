export default {
    // ORGS
    getOrgs: () => {
        return fetch('/org')
                .then(res => res.json())
                .then(data => data);
    },
    deleteOrg: (_id) => {
        return fetch(`/org/${_id}`,
                    {method : 'delete'})
                    .then(res => res.json())
                    .then(data => data);
    },
    // Usage: {id: XXXXX, ...field(s) to update}
    updateOrg: (org) => {
        return fetch(`/org/${org._id}`,
                    {method : 'put',
                     body: JSON.stringify(org),
                     headers : {
                         'Content-Type' : 'application/json'
                     }}).then(res => res.json())
                        .then(data => data);
    },
    createOrg: (org) => {
        return fetch(`/org`,
            {method : 'post',
            body: JSON.stringify(org),
            headers : {
                'Content-Type' : 'application/json'
            }}).then(res => res.json())
                .then(data => data);
    },

    // USERS
    getUsers: () => {
        return fetch('/user')
                .then(res => res.json())
                .then(data => data);
    },
    deleteUser: (_id) => {
        return fetch(`/user/${_id}`,
                    {method : 'delete'})
                    .then(res => res.json())
                    .then(data => data);
    },
    // Usage: {id: XXXXX, ...field(s) to update}
    updateUser: (user) => {
        return fetch(`/user/${user._id}`,
                    {method : 'put',
                     body: JSON.stringify(user),
                     headers : {
                         'Content-Type' : 'application/json'
                     }}).then(res => res.json())
                        .then(data => data);
    },
    createUser: (user) => {
        return fetch(`/user`,
            {method : 'post',
            body: JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }}).then(res => res.json())
                .then(data => console.log(data));
    },
    loginUser: (user) => {
        return fetch('/user/login', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => data)
    }, 

    // RECURRING PAYMENTS
    getPayments: () => {
        return fetch('/payment')
                .then(res => res.json())
                .then(data => data);
    },
    deletePayment: (_id) => {
        return fetch(`/payment/${_id}`,
                    {method : 'delete'})
                    .then(res => res.json())
                    .then(data => data);
    },
    // Usage: {id: XXXXX, ...field(s) to update}
    updatePayment: (payment) => {
        return fetch(`/payment/${payment._id}`,
                    {method : 'put',
                     body: JSON.stringify(payment),
                     headers : {
                         'Content-Type' : 'application/json'
                     }}).then(res => res.json())
                        .then(data => data);
    },
    createPayment: (payment) => {
        return fetch(`/payment`,
            {method : 'post',
            body: JSON.stringify(payment),
            headers : {
                'Content-Type' : 'application/json'
            }}).then(res => res.json())
                .then(data => data);
    },

    // TRANSACTIONS
    getTransaction: () => {
        return fetch('/transaction')
                .then(res => res.json())
                .then(data => data);
    },
    createTransaction: (transaction) => {
        return fetch(`/transaction`,
            {method : 'post',
            body: JSON.stringify(transaction),
            headers : {
                'Content-Type' : 'application/json'
            }}).then(res => res.json())
                .then(data => data);
    }
}