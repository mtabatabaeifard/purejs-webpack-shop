import Box from "../Box";

export default function Button(params) {
  const objectCondition =
    typeof params === "object" && !Array.isArray(params) && params !== null;
    return Box({
        element:'button',
        children: objectCondition ? params.children : params,
        className: 'flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg'
    })
}
