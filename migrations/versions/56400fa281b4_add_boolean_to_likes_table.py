"""add boolean to likes table

Revision ID: 56400fa281b4
Revises: 236614c0f718
Create Date: 2022-02-19 10:49:56.891243

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '56400fa281b4'
down_revision = '236614c0f718'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('likes', sa.Column('liked', sa.Boolean(), nullable=False, server_default='False'))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('likes', 'liked')
    # ### end Alembic commands ###