create table public.application_users (
                                          id uuid primary key not null,
                                          created_at timestamp(6) not null,
                                          email varchar(100) not null,
                                          full_name varchar(750) not null,
                                          password varchar(255) not null
);

create unique index uk_application_users_email
    on public.application_users(email);

create table public.companies (
                                  id uuid primary key not null,
                                  created_at timestamp(6) not null,
                                  location varchar(1000),
                                  name varchar(750) not null
);

create table public.job_applications (
                                         id uuid primary key not null,
                                         applied_date timestamp(6) not null,
                                         job_url varchar(1000),
                                         position_title varchar(100) not null,
                                         status varchar(255),
                                         company_id uuid,
                                         user_id uuid,
                                         foreign key (company_id) references public.companies(id),
                                         foreign key (user_id) references public.application_users(id)
);

create table public.interviews (
                                   id uuid primary key not null,
                                   interview_date timestamp(6) not null,
                                   interview_type varchar(50) not null,
                                   notes varchar(1000),
                                   result varchar(255),
                                   application_id uuid not null,
                                   foreign key (application_id) references public.job_applications(id)
);
