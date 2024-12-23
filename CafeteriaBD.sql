PGDMP  1    (                |         	   cafeteria    17.1    17.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    24582 	   cafeteria    DATABASE        CREATE DATABASE cafeteria WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE cafeteria;
                     postgres    false            �            1259    24584 	   productos    TABLE     Q  CREATE TABLE public.productos (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    referencia character varying(100) NOT NULL,
    precio integer NOT NULL,
    peso integer NOT NULL,
    categoria character varying(100) NOT NULL,
    stock integer NOT NULL,
    fecha_creacion date DEFAULT CURRENT_DATE NOT NULL
);
    DROP TABLE public.productos;
       public         heap r       postgres    false            �            1259    24583    productos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.productos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.productos_id_seq;
       public               postgres    false    218            �           0    0    productos_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.productos_id_seq OWNED BY public.productos.id;
          public               postgres    false    217            Z           2604    24587    productos id    DEFAULT     l   ALTER TABLE ONLY public.productos ALTER COLUMN id SET DEFAULT nextval('public.productos_id_seq'::regclass);
 ;   ALTER TABLE public.productos ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    217    218    218            �          0    24584 	   productos 
   TABLE DATA           k   COPY public.productos (id, nombre, referencia, precio, peso, categoria, stock, fecha_creacion) FROM stdin;
    public               postgres    false    218   �       �           0    0    productos_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.productos_id_seq', 26, true);
          public               postgres    false    217            ]           2606    24590    productos productos_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_pkey;
       public                 postgres    false    218            �   �  x�m�Mr�@�׏S�J���"R\�$KUNy3Am��
?Y�6Y�
��bi�l1�T1S���kB�mQPk��r*D���Ϗ)�T�fJ�`*�Th/�ʖ-���X�K�"�������O�R�_C1n:j*�lS.���zT���\J����`������K1�*v����PM�4���-X\l�5��I�3}���_0�9tv��K�m3_1p	�ⳃi�顦&�&I�F��/���'�ȅذʦ7�����\�e�Q��dGΉL�B��ߣ�����=Ԅ��ފx�V�7&%pW�wW��ӫw/9E��µmZ�k�a��@9
�}8>#1l��}��W��6���y:��l�mˀrqǖn4>��=�i�o�xш������zO�Mw�C��DnW��.y�~�u��\
$Tg���:Θ�#="�-�a�������2��Vc:Q̐<V�bKHW�3��O�!5��?y��a.�     