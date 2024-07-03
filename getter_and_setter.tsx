interface parametres {
    Id : string ;
    Nom: string;
    Telephone : string;
    Email : string;
    pesé : string;
    IncEclo : string;
    Livraisons : string;
    password : string;
    status: string;
    

}

// Initialisation de l'état
let PageState: parametres = {
    Id : "" ,
    Nom: "",
    Telephone : "",
    Email : "",
    pesé : "",
    IncEclo : "",
    Livraisons : "",
    password : "",
    status: "",
};

export const getID = () => PageState.Id;
export const setID = (value: string) => {
    PageState.Id = value;
};

// Getter et Setter pour Nom
export const getNom = () => PageState.Nom;
export const setNom = (value: string) => {
    PageState.Nom = value;
};

// Getter et Setter pour number1
export const getTel = () => PageState.Telephone;
export const setTel = (value: string) => {
    PageState.Telephone = value;
};

// Getter et Setter pour text2
export const getEmail = () => PageState.Email;
export const setEmail = (value: string) => {
    PageState.Email = value;
};

// Getter et Setter pour text3
export const getPesé = () => PageState.pesé;
export const setPesé = (value: string) => {
    PageState.pesé = value;
};

// Getter et Setter pour number2
export const getIncEclo = () => PageState.IncEclo;
export const setIncEclo = (value: string) => {
    PageState.IncEclo = value;
};

// Getter et Setter pour text4
export const getLivraison = () => PageState.Livraisons;
export const setLivraison = (value: string) => {
    PageState.Livraisons = value;
};

export const getpwd = () => PageState.password;
export const setpwd = (value: string) => {
    PageState.password = value;
};

export const getstatus = () => PageState.status;
export const setstatus = (value: string) => {
    PageState.status = value;
};
