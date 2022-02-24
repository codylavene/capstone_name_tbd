"""add user details

Revision ID: eb3e7b06fa74
Revises: a42a0791ad0b
Create Date: 2022-02-23 16:19:07.618510

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'eb3e7b06fa74'
down_revision = 'a42a0791ad0b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user_details',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('bio', sa.Text(), nullable=True),
    sa.Column('city', sa.String(), nullable=True),
    sa.Column('work', sa.String(), nullable=True),
    sa.Column('education', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_details')
    # ### end Alembic commands ###
