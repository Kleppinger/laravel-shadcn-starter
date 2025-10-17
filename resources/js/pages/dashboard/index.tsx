import React from 'react';
import DashboardLayout from '@/layout/dashboard';

const DashboardPage = () => {
    return (
        <>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min border p-8">
                <h2 className="text-3xl">Welcome!</h2>
                <p className="text-xl">
                    To get started editing the starter, read the wiki.
                </p>
            </div>
        </>
    );
};

DashboardPage.layout = (page: React.ReactNode) => {
    return (
        <DashboardLayout
            breadcrumb={[
                {
                    title: 'Dashboard',
                },
            ]}
        >
            {page}
        </DashboardLayout>
    );
};

export default DashboardPage;
