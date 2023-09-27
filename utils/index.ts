import { carProps } from "@/components/CarDetails";
export interface FilterProps{
    manufacturer:string;
    limit:number;
}

export async function fetchCars(filters:FilterProps){
    const headers = {
        'X-RapidAPI-Key': '486eb9790emsh8e2e69ee6a7af94p1fb8e4jsn468ff4e50912',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com' 
    }
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${filters.manufacturer}&limit=${filters.limit} `,{headers:headers})
    const result = await response.json();
    return result;
}
export const generatedCarImageUrl = (car:carProps,angle?:string) => {
    const url = new URL('https://cdn.imagin.studio/getimage')
    const {make,year,model} = car
    url.searchParams.append('customer', 'hrjavascript-mastery')
    url.searchParams.append('make',make)
    url.searchParams.append('modelFamily',model.split(' ')[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelYear[year',`${year}`)
    url.searchParams.append('angle',`${angle}`)
    return `${url}`
   
}