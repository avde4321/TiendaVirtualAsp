export interface ResLogin {
    error: Error;
    data:  Data;
}

export interface Data {
    token:        string;
    existeUsario: boolean;
}

export interface Error {
    codError: number;
    mensaje:  string;
}