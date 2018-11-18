
export const filterFriendsAgeTo = (friends, ageTo) => {
    let from = Number(ageTo);
    return friends.filter(item => {
        return item.dob.age <= from;
    })
}

export default filterFriendsAgeTo;