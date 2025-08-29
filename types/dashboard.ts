export interface FranchiseeStep{
 
}


export interface StepProgress{
    id: number
    title: string
    completed: boolean
    color: string
}

export interface ProspectLead{
    id: string
    name: string
    avatar: string
    stage: string
    stageColor: string
}

export interface UploadedDocument{
    id: string
    name: string
    type: 'pdf' | 'jpg' | 'mp4' | 'docx'
    size: string
    category: 'Legal' | 'venture & Assets' | 'Technology' | 'Financial'
    categoryColor: string
    aiAppInclusion: boolean
    stageAccess: string
    actions: string[]
}

export interface DashboardData{
    accountProgress: number
    totalFranchisees: number
    franchiseeGrowth: number
    KeyInsight: {
        percentage: number
        description: string
    }
    franchiseeSteps: FranchiseeStep[]
    stepProgress: StepProgress[]
    financialWellbeing: {
        totalFranchisees: number
        target: number
        current: number
        growth: number
    }
    prospectLeads: ProspectLead[]
    uploadedDocuments: UploadedDocument[]
}