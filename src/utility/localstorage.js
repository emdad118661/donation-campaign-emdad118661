const getStoredDonations = () => {
    const storedDonations = localStorage.getItem('donation-done');
    if (storedDonations) {
        return JSON.parse(storedDonations);
    }
    return [];
}

const saveStoredDonations = (id) => {
    const storedDonations = getStoredDonations();
    const exists = storedDonations.find(donationId => donationId === id);
    if (!exists) {
        storedDonations.push(id);
        localStorage.setItem('donation-done', JSON.stringify(storedDonations));
    }


}
export {getStoredDonations, saveStoredDonations};