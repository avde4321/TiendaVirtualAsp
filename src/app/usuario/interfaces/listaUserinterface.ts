export interface ResListaUser {
    error: Error;
    data:  ResListaUserData;
}

export interface ResListaUserData {
    lisData: ResUser[];
}

export interface ResUser {
    id:             number;
    usuario1:       string;
    clave:          string;
    txEmail:        string;
    txFechaIngreso: string;
    estado:         string;
}

export interface Error {
    codError: number;
    mensaje:  string;
}
