BEGIN;

CREATE SEQUENCE document_seq START 1000000;
CREATE TABLE public.document (
  id    BIGINT PRIMARY KEY NOT NULL DEFAULT NEXTVAL ('document_seq'),
  title TEXT               NOT NULL,
  text  TEXT               NOT NULL,
  date  TEXT               NOT NULL,
  time  TEXT               NOT NULL
);

COMMIT;