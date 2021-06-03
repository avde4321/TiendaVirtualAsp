export interface ResMenu {
    error: Error;
    data:  Data;
}

export interface Data {
    lisData: LisDatum[];
}

export interface LisDatum {
    idPerfil:       number;
    titulo:         string;
    descripcion:    string;
    url:            string;
    txFechaIngreso: string;
    estado:         string;
}

export interface Error {
    codError: number;
    mensaje:  string;
}