interface Link {
    description?: string;
    id?: number;
    url: string;
}
interface TranslatedLink extends Link {
    language: string;
}

const link1: TranslatedLink = {
    description:
        "TypeScript tutorial for beginners is a tutorial for all the JavaScript developers ...",
    id: 1,
    url: "www.valentinog.com/typescript/",
    language: "en"
};

function filterByTerm(input: Array<Link>, searchTerm: string) {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!input.length) throw Error("input cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return input.filter(function (arrayElement) {
        return arrayElement.url.match(regex);
    });
}

const obj1: Link = { url: "string1" };
const obj2: Link = { url: "string2" };
const obj3: Link = { url: "string3" };

const arrOfLinks: Array<Link> = [obj1, obj2, obj3];

const term: string = "java";

filterByTerm(arrOfLinks, term);