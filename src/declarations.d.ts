// In global.d.ts or declarations.d.ts
declare module '*.pdf' {
    const content: any;
    export default content;
}

declare interface ProjectData {
    id: string;
    title: string;
    imageUrl: string;
    description?: string;
    // Add other fields as needed
}
