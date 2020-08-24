let list = []
let date = new Date;
let year = date.getFullYear();
let years = date.getFullYear();
// console.log(year)
year = year + 1
for (let i = 0; i < 35; i++) {
    year--
    list.push(
        year
    )
}
// console.log(list)
export default { list,years }