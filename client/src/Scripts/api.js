export default {
    getOrgs : () => {
        return fetch('/org')
                .then(res => res.json())
                .then(data => data);
    },
    deleteOrg : (_id) => {
        return fetch(`/org/${_id}`,
                    {method : 'delete'})
                    .then(res => res.json())
                    .then(data => data);
    },
    updateOrg : (org) => {
        return fetch(`/org/${org._id}`,
                    {method : 'put',
                     body: JSON.stringify(org),
                     headers : {
                         'Content-Type' : 'application/json'
                     }}).then(res => res.json())
                        .then(data => data);
    },
    createOrg : (org) => {
        return fetch(`/org`,
            {method : 'post',
            body: JSON.stringify(org),
            headers : {
                'Content-Type' : 'application/json'
            }}).then(res => res.json())
                .then(data => data);
    }
}