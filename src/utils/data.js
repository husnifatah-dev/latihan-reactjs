let contacts = [
    {
        id: 1,
        name: 'Mob',
        tag: 'Mob Psycho',
        imageUrl: '/images/mob.png',
    },
    {
        id: 2,
        name: 'Kira',
        tag: 'Kira-kira',
        imageUrl: '/images/kira.jpeg',
    },
    {
        id: 3,
        name: 'saitama',
        tag: 'Hero Gabut',
        imageUrl: '/images/saitama.png',
    },
];

function getContacts() {
    return contacts;
}

function addContact(contact) {
    contacts = [...contacts, { id: +new Date(), imageUrl: '/images/default.jpg', ...contact}];
}

function deleteContact(id) {
    contacts = contacts.filter((contact) => contact.id !== id);
}

export { getContacts, addContact, deleteContact };

