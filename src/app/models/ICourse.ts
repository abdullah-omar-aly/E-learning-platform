// export default interface ICourse {
//     id: "1" ,
//     name: "Data Engineering with AWS" ,
//     description: "Understand the latest AWS features used by data engineers to design and build systems for collecting, storing, and analyzing data at scale." ,
//     level: 'intermediate' ,
//     duration: '4 months' ,
//     reviews: {
//         count: 1800 ,
//         rating: 4.5
//     } ,
//     "skills-coverd": ['AWS Glue , Amazon S3 , AWS Data Warehouse , Redshift , Apache Airflow , Data Pipeline Creation , Cloud Computing Fluency']  ,
//     prerequisites: ['intermediate Python ' , 'intermediate SQL ' , 'command line']
// }
export default interface ICourse {
    id: string ,
    name: string ,
    description: string  ,
    level: string ,
    duration: string ,
    reviews: {
        count: number ,
        rating: number
    } ,
    "skills-coverd": string[]  ,
    prerequisites: string[] ,
    tags: string[] ,
    image: string
}