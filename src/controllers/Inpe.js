export default {
    getStates: async () => {
        return [{
            "pais_id": 33,
            "pais_name": "Brasil",
            "estado_id": 51,
            "estado_name": "Mato Grosso"
        },
        {
            "pais_id": 33,
            "pais_name": "Brasil",
            "estado_id": 52,
            "estado_name": "Goiás"
        },
        {
            "pais_id": 33,
            "pais_name": "Brasil",
            "estado_id": 53,
            "estado_name": "Distrito Federal"
        }];
    },
    getCities: async (id) => {
        switch(id*1) {
            case 51:
                return [{
                    "pais_name": "Brasil",
                    "municipio_name": "ACORIZAL",
                    "estado_id": 51,
                    "pais_id": 33,
                    "estado_name": "MATO GROSSO",
                    "municipio_id": 5100102,
                    "count_focos": null
                },
                {
                    "pais_name": "Brasil",
                    "municipio_name": "ÁGUA BOA",
                    "estado_id": 51,
                    "pais_id": 33,
                    "estado_name": "MATO GROSSO",
                    "municipio_id": 5100201,
                    "count_focos": 3
                },
                {
                    "pais_name": "Brasil",
                    "municipio_name": "ALTA FLORESTA",
                    "estado_id": 51,
                    "pais_id": 33,
                    "estado_name": "MATO GROSSO",
                    "municipio_id": 5100250,
                    "count_focos": 21
                }];
            case 52:
                return [{
                    "pais_name": "Brasil",
                    "municipio_name": "ABADIA DE GOIÁS",
                    "estado_id": 52,
                    "pais_id": 33,
                    "estado_name": "GOIÁS",
                    "municipio_id": 5200050,
                    "count_focos": 4
                },
                {
                    "pais_name": "Brasil",
                    "municipio_name": "ABADIÂNIA",
                    "estado_id": 52,
                    "pais_id": 33,
                    "estado_name": "GOIÁS",
                    "municipio_id": 5200100,
                    "count_focos": 27
                },
                {
                    "pais_name": "Brasil",
                    "municipio_name": "ACREÚNA",
                    "estado_id": 52,
                    "pais_id": 33,
                    "estado_name": "GOIÁS",
                    "municipio_id": 5200134,
                    "count_focos": null
                }];
            case 53:
                return [{
                    "pais_name": "Brasil",
                    "municipio_name": "BRASÍLIA",
                    "estado_id": 53,
                    "pais_id": 33,
                    "estado_name": "DISTRITO FEDERAL",
                    "municipio_id": 5300108,
                    "count_focos": 16
                }];
            default:
                return [];
        }

    }
}