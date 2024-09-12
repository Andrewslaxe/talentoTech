export type QualificationCard = {
  work: Work[],
  education: Education[],
}

type Work = {
  title: string,
  description: string,
  imageSrc: string,
  customStyles?: string
}

type Education = {
  title: string,
  imageSrc: string,
}
