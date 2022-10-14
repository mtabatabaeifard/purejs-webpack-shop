import Box from "../Box";

function TextField() {
    return Box({
        element:'input',
        className:'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
    });
}
export default TextField;