export const sidebarLinks = [
    {
        label: 'Home',
        route: '/',
        imgUrl: '/icons/home.svg'
    },
    {
        label: 'Upcoming',
        route: '/upcoming',
        imgUrl: '/icons/upcoming.svg'
    },
    {
        label: 'Previous',
        route: '/previous',
        imgUrl: '/icons/previous.svg'
    },
    {
        label: 'Recordings',
        route: '/recordings',
        imgUrl: '/icons/video.svg'
    },
    {
        label: 'Personal Room',
        route: '/personal-room',
        imgUrl: '/icons/add-personal.svg'
    }
];

export interface HomeCardModel {
    img: string;
    title: string;
    description: string;
    bgColor: string;
    navigation?: string;
    meetingState: any;
    handleClick?: () => void;
}

export const homeCards: HomeCardModel[] = [
    {
        img : '/icons/add-meeting.svg',
        title: 'New Meeting',
        description: 'Start a meeting',
        bgColor: 'bg-blue-1',
        meetingState: 'isNewMeeting'
    },
    {
        img: '/icons/join-meeting.svg',
        title: 'Join Meeting',
        bgColor: 'bg-blue-2',
        description: 'Via invitation link',
        meetingState: 'isJoiningMeeting'
    },
    {
        img: '/icons/schedule.svg',
        title: 'Schedule Meeting',
        description: 'Plan your meetings',
        bgColor: 'bg-blue-3',
        meetingState: 'isScheduleMeeting'
    },
    {
        img: '/icons/recordings.svg',
        title: 'View Recording',
        description: 'Check out your recordings',
        bgColor: 'bg-blue-4',
        navigation: '/recordings',
        meetingState: ''
    }
];