
export const filterFriendsAgeFrom = (friends, ageFrom) => {
    let from = Number(ageFrom);
    return friends.filter(item => {
        return item.dob.age >= from;
    })
}

export default filterFriendsAgeFrom;