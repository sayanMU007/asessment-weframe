'use client'

import DashboardLayout from '@/Components/layout/dashboard-layout'
import { AccountProgress } from '@/Components/dashboard/account-progress'
import { StepsProgress } from '@/Components/dashboard/steps-progress'
import { TotalFranchisees } from '@/Components/dashboard/total-franchisees'
import {keyinsights}   from '@/Components/dashboard/key-insight'
import { FinancialWellbeing } from '@/Components/dashboard/financial-wellbeing'
import { ProspectLeads } from '@/Components/dashboard/prospect-leads'
import { MyUploads } from '@/Components/dashboard/my-uploads'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-4 space-y-6">
          <AccountProgress />
          <StepsProgress />
        </div>
        
        {/* Middle Column */}
        <div className="col-span-4 space-y-6">
          <TotalFranchisees />
          <FinancialWellbeing />
        </div>
        
        {/* Right Column */}
        <div className="col-span-4 space-y-6">
          <keyinsights />
          <ProspectLeads />
        </div>
        
        {/* Full Width Bottom Section */}
        <div className="col-span-12">
          <MyUploads />
        </div>
      </div>
    </DashboardLayout>
  )
}